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


// Description of Mimosa fernandezCasasii
const Mimosa_fernandezCasasii = new Mimosa()
Mimosa_fernandezCasasii.specificEpithet = 'fernandezCasasii'

Mimosa_fernandezCasasii.stems = new Stems()

Mimosa_fernandezCasasii.stipule = new Stipule()
Mimosa_fernandezCasasii.stipule.margin = new MarginStipule()
Mimosa_fernandezCasasii.stipule.adaxial = new AdaxialStipule()
Mimosa_fernandezCasasii.stipule.abaxial = new AbaxialStipule()

Mimosa_fernandezCasasii.leaf = new Leaf()
Mimosa_fernandezCasasii.leaf.petiole = new Petiole()
Mimosa_fernandezCasasii.leaf.bipinnate = new Bipinnate()
Mimosa_fernandezCasasii.leaf.bipinnate.rachis = new Rachis()
Mimosa_fernandezCasasii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 10)
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_fernandezCasasii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_fernandezCasasii.inflorescence = new Inflorescence()
Mimosa_fernandezCasasii.inflorescence.peduncle = new Peduncle()
Mimosa_fernandezCasasii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_fernandezCasasii.flower = new Flower()
Mimosa_fernandezCasasii.flower.bracteole = new Bracteole()
Mimosa_fernandezCasasii.flower.merism = '4-merous'
Mimosa_fernandezCasasii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_fernandezCasasii.flower.calyx = new Calyx()
Mimosa_fernandezCasasii.flower.calyx.shape = 'campanulate'
Mimosa_fernandezCasasii.flower.corolla = new Corolla()
Mimosa_fernandezCasasii.flower.corolla.shape = 'funnelform'

Mimosa_fernandezCasasii.androecium = new Androecium()
Mimosa_fernandezCasasii.androecium.filaments = new Filaments()
Mimosa_fernandezCasasii.androecium.filaments.colour = 'pinkish'

Mimosa_fernandezCasasii.ginoecium = new Ginoecium()
Mimosa_fernandezCasasii.ginoecium.ovary = new Ovary()

Mimosa_fernandezCasasii.fruit = new Fruit()
Mimosa_fernandezCasasii.fruit.stipe = new Stipe()
Mimosa_fernandezCasasii.fruit.replum = new Replum()
Mimosa_fernandezCasasii.fruit.epicarp = new Epicarp()

Mimosa_fernandezCasasii.seed = new Seed()


// Description authorship
Mimosa_fernandezCasasii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_fernandezCasasii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa fernandezCasasii
export { Mimosa_fernandezCasasii }