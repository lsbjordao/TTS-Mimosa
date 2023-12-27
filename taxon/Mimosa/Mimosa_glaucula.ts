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


// Description of Mimosa glaucula
const Mimosa_glaucula = new Mimosa()
Mimosa_glaucula.specificEpithet = 'glaucula'

Mimosa_glaucula.stems = new Stems()

Mimosa_glaucula.stipule = new Stipule()
Mimosa_glaucula.stipule.margin = new MarginStipule()
Mimosa_glaucula.stipule.adaxial = new AdaxialStipule()
Mimosa_glaucula.stipule.abaxial = new AbaxialStipule()

Mimosa_glaucula.leaf = new Leaf()
Mimosa_glaucula.leaf.petiole = new Petiole()
Mimosa_glaucula.leaf.bipinnate = new Bipinnate()
Mimosa_glaucula.leaf.bipinnate.rachis = new Rachis()
Mimosa_glaucula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_glaucula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_glaucula.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_glaucula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_glaucula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_glaucula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_glaucula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(34, 48)
Mimosa_glaucula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_glaucula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_glaucula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_glaucula.inflorescence = new Inflorescence()
Mimosa_glaucula.inflorescence.peduncle = new Peduncle()
Mimosa_glaucula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_glaucula.flower = new Flower()
Mimosa_glaucula.flower.bracteole = new Bracteole()
Mimosa_glaucula.flower.merism = '4-merous'
Mimosa_glaucula.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_glaucula.flower.calyx = new Calyx()
Mimosa_glaucula.flower.calyx.shape = 'campanulate'
Mimosa_glaucula.flower.corolla = new Corolla()
Mimosa_glaucula.flower.corolla.shape = 'turbinate'

Mimosa_glaucula.androecium = new Androecium()
Mimosa_glaucula.androecium.filaments = new Filaments()
Mimosa_glaucula.androecium.filaments.colour = 'pinkish'

Mimosa_glaucula.ginoecium = new Ginoecium()
Mimosa_glaucula.ginoecium.ovary = new Ovary()

Mimosa_glaucula.fruit = new Fruit()
Mimosa_glaucula.fruit.stipe = new Stipe()
Mimosa_glaucula.fruit.replum = new Replum()
Mimosa_glaucula.fruit.epicarp = new Epicarp()

Mimosa_glaucula.seed = new Seed()


// Description authorship
Mimosa_glaucula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_glaucula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa glaucula
export { Mimosa_glaucula }