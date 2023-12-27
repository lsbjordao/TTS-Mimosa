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


// Description of Mimosa irwinii
const Mimosa_irwinii = new Mimosa()
Mimosa_irwinii.specificEpithet = 'irwinii'

Mimosa_irwinii.stems = new Stems()

Mimosa_irwinii.stipule = new Stipule()
Mimosa_irwinii.stipule.margin = new MarginStipule()
Mimosa_irwinii.stipule.adaxial = new AdaxialStipule()
Mimosa_irwinii.stipule.abaxial = new AbaxialStipule()

Mimosa_irwinii.leaf = new Leaf()
Mimosa_irwinii.leaf.petiole = new Petiole()
Mimosa_irwinii.leaf.bipinnate = new Bipinnate()
Mimosa_irwinii.leaf.bipinnate.rachis = new Rachis()
Mimosa_irwinii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_irwinii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_irwinii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(9, 16)
Mimosa_irwinii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_irwinii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_irwinii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_irwinii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 16)
Mimosa_irwinii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_irwinii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_irwinii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_irwinii.inflorescence = new Inflorescence()
Mimosa_irwinii.inflorescence.peduncle = new Peduncle()
Mimosa_irwinii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_irwinii.flower = new Flower()
Mimosa_irwinii.flower.bracteole = new Bracteole()
Mimosa_irwinii.flower.merism = '4-merous'
Mimosa_irwinii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_irwinii.flower.calyx = new Calyx()
Mimosa_irwinii.flower.calyx.shape = 'campanulate'
Mimosa_irwinii.flower.corolla = new Corolla()
Mimosa_irwinii.flower.corolla.shape = 'funnelform'

Mimosa_irwinii.androecium = new Androecium()
Mimosa_irwinii.androecium.filaments = new Filaments()
Mimosa_irwinii.androecium.filaments.colour = 'pinkish'

Mimosa_irwinii.ginoecium = new Ginoecium()
Mimosa_irwinii.ginoecium.ovary = new Ovary()

Mimosa_irwinii.fruit = new Fruit()
Mimosa_irwinii.fruit.stipe = new Stipe()
Mimosa_irwinii.fruit.replum = new Replum()
Mimosa_irwinii.fruit.epicarp = new Epicarp()

Mimosa_irwinii.seed = new Seed()


// Description authorship
Mimosa_irwinii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_irwinii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa irwinii
export { Mimosa_irwinii }