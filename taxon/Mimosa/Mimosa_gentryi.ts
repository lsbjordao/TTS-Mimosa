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


// Description of Mimosa gentryi
const Mimosa_gentryi = new Mimosa()
Mimosa_gentryi.specificEpithet = 'gentryi'

Mimosa_gentryi.stems = new Stems()

Mimosa_gentryi.stipule = new Stipule()
Mimosa_gentryi.stipule.margin = new MarginStipule()
Mimosa_gentryi.stipule.adaxial = new AdaxialStipule()
Mimosa_gentryi.stipule.abaxial = new AbaxialStipule()

Mimosa_gentryi.leaf = new Leaf()
Mimosa_gentryi.leaf.petiole = new Petiole()
Mimosa_gentryi.leaf.bipinnate = new Bipinnate()
Mimosa_gentryi.leaf.bipinnate.rachis = new Rachis()
Mimosa_gentryi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_gentryi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_gentryi.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 3)
Mimosa_gentryi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_gentryi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_gentryi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_gentryi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(45)
Mimosa_gentryi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(50, 95)
Mimosa_gentryi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_gentryi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_gentryi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_gentryi.inflorescence = new Inflorescence()
Mimosa_gentryi.inflorescence.peduncle = new Peduncle()
Mimosa_gentryi.inflorescence.capitate = new CapitateInflorescence()

Mimosa_gentryi.flower = new Flower()
Mimosa_gentryi.flower.bracteole = new Bracteole()
Mimosa_gentryi.flower.merism = ['4-merous', '5-merous']
Mimosa_gentryi.flower.calyx = new Calyx()
Mimosa_gentryi.flower.calyx.shape = 'campanulate'
Mimosa_gentryi.flower.corolla = new Corolla()
Mimosa_gentryi.flower.corolla.shape = 'funnelform'

Mimosa_gentryi.androecium = new Androecium()
Mimosa_gentryi.androecium.filaments = new Filaments()
Mimosa_gentryi.androecium.filaments.colour = 'lilac'

Mimosa_gentryi.ginoecium = new Ginoecium()
Mimosa_gentryi.ginoecium.ovary = new Ovary()

Mimosa_gentryi.fruit = new Fruit()
Mimosa_gentryi.fruit.stipe = new Stipe()
Mimosa_gentryi.fruit.replum = new Replum()
Mimosa_gentryi.fruit.epicarp = new Epicarp()

Mimosa_gentryi.seed = new Seed()


// Description authorship
Mimosa_gentryi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_gentryi.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa gentryi
export { Mimosa_gentryi }