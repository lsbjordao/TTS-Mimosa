// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa pseudoradula
const Mimosa_pseudoradula = new Mimosa()
Mimosa_pseudoradula.specificEpithet = 'pseudoradula'

Mimosa_pseudoradula.stems = new Stems()

Mimosa_pseudoradula.stipule = new Stipule()
Mimosa_pseudoradula.stipule.margin = new MarginStipule()
Mimosa_pseudoradula.stipule.adaxial = new AdaxialStipule()
Mimosa_pseudoradula.stipule.abaxial = new AbaxialStipule()

Mimosa_pseudoradula.leaf = new Leaf()
Mimosa_pseudoradula.leaf.petiole = new Petiole()
Mimosa_pseudoradula.leaf.bipinnate = new Bipinnate()
Mimosa_pseudoradula.leaf.bipinnate.rachis = new Rachis()
Mimosa_pseudoradula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pseudoradula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pseudoradula.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pseudoradula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pseudoradula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pseudoradula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pseudoradula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pseudoradula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pseudoradula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pseudoradula.inflorescence = new Inflorescence()
Mimosa_pseudoradula.inflorescence.peduncle = new Peduncle()
Mimosa_pseudoradula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pseudoradula.flower = new Flower()
Mimosa_pseudoradula.flower.bracteole = new Bracteole()
Mimosa_pseudoradula.flower.merism = '4-merous'
Mimosa_pseudoradula.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pseudoradula.flower.calyx = new Calyx()
Mimosa_pseudoradula.flower.corolla = new Corolla()
Mimosa_pseudoradula.flower.corolla.shape = 'funnelform'

Mimosa_pseudoradula.androecium = new Androecium()
Mimosa_pseudoradula.androecium.filaments = new Filaments()
Mimosa_pseudoradula.androecium.filaments.colour = 'pinkish'

Mimosa_pseudoradula.ginoecium = new Ginoecium()
Mimosa_pseudoradula.ginoecium.ovary = new Ovary()

Mimosa_pseudoradula.fruit = new Fruit()
Mimosa_pseudoradula.fruit.stipe = new Stipe()
Mimosa_pseudoradula.fruit.replum = new Replum()
Mimosa_pseudoradula.fruit.epicarp = new Epicarp()

Mimosa_pseudoradula.seed = new Seed()


// Description authorship
Mimosa_pseudoradula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pseudoradula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa pseudoradula
export { Mimosa_pseudoradula }